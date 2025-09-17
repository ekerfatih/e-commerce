import React, {useEffect, useMemo, useRef, useState} from 'react'
import {ChevronDown} from 'lucide-react'
import Limiter from '../../Homepage/layout/Limiter.jsx'
import Product from '../../Homepage/BestSeller/Product.jsx'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../../../store/actions/productActions.js'

const sortOptions = [
    {value: 'price:asc', label: 'Sort by Price asc'},
    {value: 'price:desc', label: 'Sort by Price desc'},
    {value: 'rating:asc', label: 'Sort by Rating asc'},
    {value: 'rating:desc', label: 'Sort by Rating desc'},
]

const ListOfTheProducts = () => {
    const [limit, setLimit] = useState(25)
    const [filter, setFilter] = useState('')
    const [sortOption, setSortOption] = useState('')
    const [acc, setAcc] = useState([])
    const {productList, total, fetchState, categories} = useSelector(s => s.products)
    const dispatch = useDispatch()
    const {categoryId} = useParams()
    const sentinelRef = useRef(null)

    const base = useMemo(() => {
        const q = new URLSearchParams()
        q.set('limit', String(limit))
        if (categoryId) q.set('category', String(categoryId))
        if (filter) q.set('filter', filter)
        if (sortOption) q.set('sort', sortOption)
        return q
    }, [limit, categoryId, filter, sortOption])

    useEffect(() => {
        setAcc([])
    }, [categoryId, filter, sortOption, limit])

    useEffect(() => {
        const q = new URLSearchParams(base)
        q.set('offset', '0')
        dispatch(fetchProducts(`?${q.toString()}`))
    }, [dispatch, base])

    useEffect(() => {
        if (!productList || productList.length === 0) return
        setAcc(prev => {
            const seen = new Set(prev.map(x => x.id))
            const merged = [...prev]
            for (const it of productList) if (!seen.has(it.id)) merged.push(it)
            return merged
        })
    }, [productList])

    useEffect(() => {
        if (!sentinelRef.current) return
        const el = sentinelRef.current
        const io = new IntersectionObserver(entries => {
            const visible = entries.some(e => e.isIntersecting)
            const loading = fetchState === 'FETCHING'
            const hasMore = total ? acc.length < Number(total) : true
            if (visible && !loading && hasMore) {
                const q = new URLSearchParams(base)
                q.set('offset', String(acc.length))
                dispatch(fetchProducts(`?${q.toString()}`))
            }
        }, {root: null, rootMargin: '200px', threshold: 0})
        io.observe(el)
        return () => io.disconnect()
    }, [dispatch, base, acc.length, total, fetchState])

    const loading = fetchState === 'FETCHING'
    const done = total ? acc.length >= Number(total) : false

    return (
        <div className="font-montserrat">
            <div className="flex flex-col sm:flex-row gap-4 py-20 justify-between items-center">
                <h6>Products</h6>
                <div className="flex gap-4 items-center">
                    <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter"
                           className="rounded-[5px] border-1 border-gray-500 bg-[#F9F9F9] px-3 py-2"/>
                    <select value={sortOption} onChange={e => setSortOption(e.target.value)}
                            className="rounded-[5px] border-1 border-gray-500 bg-[#F9F9F9] px-3 py-2">
                        <option value="">Tavsiye Edilen</option>
                        {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                    <select value={limit} onChange={e => setLimit(Number(e.target.value))}
                            className="rounded-[5px] border-1 border-gray-500 bg-[#F9F9F9] px-3 py-2">
                        <option value={12}>12</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>

            <div className="mx-auto">
                <div className="w-full py-10 flex-col flex sm:flex-row sm:flex-wrap gap-x-8 sm:justify-evenly">
                    {acc.map(p => {
                        const cat = categories.find(category => category.id === p.category_id)
                        return (
                            <div key={p.id} className="sm:w-[23%]">
                                <Link
                                    to={`/shop/${cat.gender === "k" ? "kadin" : "erkek"}/${cat.code.slice(2)}/${cat.id}/${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/${p.id}`}
                                >
                                    <Product renderColors {...p} loading={false}/>
                                </Link>
                            </div>
                        )
                    })}
                    {loading && Array.from({length: Math.min(limit, 8)}).map((_, i) => (
                        <div key={`sk-${i}`} className="sm:w-[23%] flex justify-center items-center h-64">
                            <div
                                className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
                        </div>
                    ))}
                </div>
                <div ref={sentinelRef} className="h-10 w-full"/>
                {done && <div className="text-center py-6 text-sm text-gray-500">Hepsi yüklendi</div>}
            </div>
        </div>
    )
}

export default Limiter(ListOfTheProducts)
