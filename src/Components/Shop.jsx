import React, { useEffect, useState } from 'react'

import { getMaincategory } from '../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../Store/ActionCreators/SubcategoryActionCreators'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'
import { getBrand } from '../Store/ActionCreators/BrandActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'


export default function Shop() {

    let [maincategory, setMaincategory] = useState([])
    let [subcategory, setSubcategory] = useState([])
    let [brand, setBrand] = useState([])
    let [product, setProduct] = useState([])
    let [mc, setMc] = useState('')
    let [sc, setSc] = useState('')
    let [br, setBr] = useState('')
    let [search, setSearch] = useState('')
    let [min, setMin] = useState(0)
    let [max, setMax] = useState(0)
    let [flag, setFlag] = useState(false)
    const [params] = useSearchParams()

    let dispatch = useDispatch()
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    let BrandStateData = useSelector((state) => state.BrandStateData)
    let ProductStateData = useSelector((state) => state.ProductStateData)

    function Filter(mc, sc, br, min = 0, max = 0) {
        var data = []
        if (mc === '' && sc === '' && br === '')
            data = ProductStateData
        else if (mc !== '' && sc === '' && br === '') {
            data = ProductStateData.filter((x) => x.maincategory == mc)
        }
        else if (mc === '' && sc !== '' && br === '') {
            data = ProductStateData.filter((x) => x.subcategory == sc)
        }
        else if (mc === '' && sc === '' && br !== '') {
            data = ProductStateData.filter((x) => x.brand == br)
        }
        else if (mc !== '' && sc !== '' && br === '') {
            data = ProductStateData.filter((x) => x.maincategory == mc && x.subcategory == sc)
        }
        else if (mc !== '' && sc === '' && br !== '') {
            data = ProductStateData.filter((x) => x.maincategory == mc && x.brand == br)
        }
        else if (mc === '' && sc !== '' && br !== '') {
            data = ProductStateData.filter((x) => x.subcategory == sc && x.brand == br)
        }
        else
            data = ProductStateData.filter((x) => x.maincategory == mc && x.subcategory == sc && x.brand == br)

        //Price Filter
        if (min === 0 && max === 0)
            setProduct(data)
        else
            setProduct(data.filter((x) => x.finalprice >= min && x.finalprice <= max))
    }
    function categoryFilter(mc, sc, br) {
        setMc(mc)
        setSc(sc)
        setBr(br)
        Filter(mc, sc, br)
        setSearch(''); // Reset search filter
    }

    function postSearch(e) {
        e.preventDefault()
        var srch = search.toLowerCase()
        // alert(srch)
        setProduct(ProductStateData.filter((x) => x.name.toLowerCase().includes(srch) || x.maincategory.toLowerCase() === srch || x.subcategory.toLowerCase() === srch || x.brand.toLowerCase() === srch || x.color.toLowerCase() === srch || x.description.toLowerCase().includes(srch) || x.size.toLowerCase() === srch))
        // let filteredData = ProductStateData.filter((x) => x.name.toLowerCase().includes(srch));
        // setProduct(filteredData);
    }

    function sortFilter(option) {
        // if (option === "1")
        //     setProduct(product.sort((x, y) => y.id.localeCompare(x.id)))
        // else if (option === "2")
        //     setProduct(product.sort((x, y) => x.finalprice - y.finalprice))
        // else
        //     setProduct(product.sort((x, y) => y.finalprice - x.finalprice))
        // setFlag(!false)

        let sortedProduct = [...product]; // Create a copy of the original array

        if (option === "1")
            sortedProduct.sort((x, y) => y.id.localeCompare(x.id));
        else if (option === "2")
            sortedProduct.sort((x, y) => x.finalprice - y.finalprice);
        else
            sortedProduct.sort((x, y) => y.finalprice - x.finalprice);

        setProduct(sortedProduct); // Update the state with the sorted array
        setFlag(!false);
    }

    function postPriceFilter(params) {
        Filter(mc, sc, br, min, max)
    }

    useEffect(() => {
        (() => {
            dispatch(getMaincategory())
            if (MaincategoryStateData.length)
                setMaincategory(MaincategoryStateData)
        })()
    }, [MaincategoryStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getSubcategory())
            if (SubcategoryStateData.length)
                setSubcategory(SubcategoryStateData)
        })()
    }, [SubcategoryStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getBrand())
            if (BrandStateData.length)
                setBrand(BrandStateData)
        })()
    }, [BrandStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getProduct())
            if (ProductStateData.length) {
                if (params.get("mc"))
                    setProduct(ProductStateData.filter(x=>x.maincategory === params.get("mc")))
                else
                    setProduct(ProductStateData)
            }

        })()
    }, [ProductStateData.length, params.get("mc")])

    return (
        <div className='container-fluid my-5'>
            <div style={{ height: 50 }}></div>
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group  mb-3">
                        <button href="#" className="list-group-item list-group-item-action bg-secondary text-light" aria-current="true">
                            Main Category
                        </button>
                        <button href="#" className="list-group-item list-group-item-action" onClick={() => categoryFilter('', sc, br)}>All Category</button>
                        {
                            maincategory.map((item, index) => {
                                return <button key={index} className="list-group-item list-group-item-action" aria-disabled="true" onClick={() => categoryFilter(item.name, sc, br)}>{item.name}</button>

                            })
                        }
                    </div>

                    <div className="list-group mb-3">
                        <button href="#" className="list-group-item list-group-item-action bg-secondary text-light" aria-current="true">
                            Sub Category
                        </button>
                        <button href="#" className="list-group-item list-group-item-action" onClick={() => categoryFilter(mc, '', br)}>All Category</button>
                        {
                            subcategory.map((item, index) => {
                                return <button key={index} className="list-group-item list-group-item-action" aria-disabled="true" onClick={() => categoryFilter(mc, item.name, br)}>{item.name}</button>

                            })
                        }
                    </div>

                    <div className="list-group mb-3">
                        <button href="#" className="list-group-item list-group-item-action bg-secondary text-light" aria-current="true">
                            Brand
                        </button>
                        <button href="#" className="list-group-item list-group-item-action" onClick={() => categoryFilter(mc, sc, '')}>All Category</button>
                        {
                            brand.map((item, index) => {
                                return <button key={index} className="list-group-item list-group-item-action" aria-disabled="true" onClick={() => categoryFilter(mc, sc, item.name)}>{item.name}</button>

                            })
                        }
                    </div>
                    <div className='mb-3'>
                        <h5 className='bg-secondary text-center text-light p-2'>Price Filter</h5>
                        <div className='d-flex'>
                            <input type="number" className='form-control' name="min" value={min} onChange={(e) => setMin(e.target.value)} placeholder='Min Amount' />
                            <input type="number" className='form-control' name="max" value={max} onChange={(e) => setMax(e.target.value)} placeholder='Max Amount' />
                        </div>
                        <button className='btn btn-secondary w-100 my-3' onClick={postPriceFilter}>Apply</button>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-9 mb-3">
                            <form onSubmit={postSearch}>
                                <div className='d-flex'>
                                    <input type="search" name="search" onChange={(e) => setSearch(e.target.value)} placeholder='Search...' className='form-control' />
                                    <button className='btn btn-secondary' type='submit'>Search</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 mb-3">
                            <select onChange={(e) => sortFilter(e.target.value)} className='form-select'>
                                <option value="1">Latest</option>
                                <option value="2">Price: L to H</option>
                                <option value="3">Price: H to L</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {
                            product.map((item, index) => {
                                return <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
                                    <div className="card p-2">
                                        <div className="product-card position-relative">
                                            <div className="image-holder">
                                                <img src={`/images/${item.pic[0]}`} alt="product-item" className="img-fluid" style={{ height: 300, width: "100%" }} />
                                            </div>

                                            <p className="py-2 text-center" style={{ height: 30 }}>
                                                <Link to={`/product/${item.id}`}>{item.name}</Link>
                                            </p>
                                            <p className='text-dark text-center'><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice} <sup className='text-success'>{item.discount}% Off</sup></p>
                                            <Link to={`/product/${item.id}`} className="btn btn-sm w-100 btn-black">Add to Cart<span className="material-symbols-outlined float-end">
                                                shopping_cart
                                            </span></Link>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
