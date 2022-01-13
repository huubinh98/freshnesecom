import React, { useEffect, useState } from 'react'
import { IconList } from '../../components/Icon'
import { IconGrid } from '../../components/Icon'
import Input from '../../components/Input'
import ProductItem from '../../components/ProductItem'
import Tags from '../../components/Tags'
import './style.scss'
import Rating from '@mui/material/Rating';
import productService from '../../service/productService'

const CategoriesPage = () => {

    const [getProduct, setGetProduct] = useState([]);
    const [getCategory, setGetCategory] = useState([]);

    useEffect(() => {
        (async () => {
            const resPro = await productService.getProduct();
            const dataPro = resPro?.data;
            setGetProduct(dataPro);
        })();
    }, []);

    useEffect(() => {
        fechProduct();
    }, [])

    const fechProduct = async () => {
        const res = await productService.getCategory();
        setGetCategory(res);
    }
    let temp = getCategory.slice(1, 7);
    // console.log(getCategory);

    return (
        <div className="categoriesPage">
            <div className="container">
                <div className="breadcrumb">
                    <p>Homepage</p>
                    <span>/</span>
                    <p>Fruit and vegetables</p>
                </div>

                <div className="headline">
                    <div className="left">
                        <h1>Fruit and vegetables</h1>
                    </div>

                    <div className="right">
                        <div className="tab_list">
                            <div className="tab-item">
                                <IconGrid />
                                <span>Grid view</span>
                            </div>
                            <div className="tab-item">
                                <IconList />
                                <span>List view</span>
                            </div>
                            <div className="tab-item">
                                <Tags itemTag='117' color='green' size='small' />
                                <span>Product</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="options_category">

                </div>

                <div className="categories_content">
                    <div className="categories_content-sidebar">
                        <ul className="categories_list">
                            {temp.map((e, i) => {
                                return (
                                    <li className="categories-item" key={i}>
                                        <span>{e.title}</span>
                                        <Tags itemTag='320' color='green' size='small' />
                                    </li>
                                );
                            })}
                        </ul>

                        <ul className="brand_list">
                            <h3 className='sidebar-title'>Brands</h3>
                            <div className="brand-item">
                                <Input type='checkbox' clear='clear' width text='Filtre by brand item' />
                            </div>
                            <div className="brand-item">
                                <Input type='checkbox' clear='clear' width text='Filtre by brand item' />
                            </div>
                            <div className="brand-item">
                                <Input type='checkbox' clear='clear' width text='Filtre by brand item' />
                            </div>
                            <div className="brand-item">
                                <Input type='checkbox' clear='clear' width text='Filtre by brand item' />
                            </div>
                            <div className="brand-item">
                                <Input type='checkbox' clear='clear' width text='Filtre by brand item' />
                            </div>
                        </ul>

                        <ul className="rate_list">
                            <h3 className='sidebar-title'>Rating</h3>
                            <div className="rate-item">
                                <Input type='checkbox' clear='clear' />
                                <Rating name="read-only" value={5} readOnly />
                            </div>
                            <div className="rate-item">
                                <Input type='checkbox' clear='clear' />
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                            <div className="rate-item">
                                <Input type='checkbox' clear='clear' />
                                <Rating name="read-only" value={3} readOnly />

                            </div>
                            <div className="rate-item">
                                <Input type='checkbox' clear='clear' />
                                <Rating name="read-only" value={2} readOnly />
                            </div>
                            <div className="rate-item">
                                <Input type='checkbox' clear='clear' />
                                <Rating name="read-only" value={1} readOnly />
                            </div>
                        </ul>

                    </div>
                    <div className="categories_content-product">
                        <ProductItem productCart={getProduct} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CategoriesPage
