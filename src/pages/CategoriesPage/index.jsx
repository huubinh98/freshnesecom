import React from 'react'
import { IconList } from '../../components/Icon'
import { IconGrid } from '../../components/Icon'
import Input from '../../components/Input'
import Tags from '../../components/Tags'
import './style.scss'

const CategoriesPage = () => {
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
                            <h3 className='sidebar-title'>Categories</h3>
                            <li className="categories-item">
                                <span>Category Name</span>
                                <Tags itemTag='320' color='green' size='small' />
                            </li>
                            <li className="categories-item">
                                <span>Category Name</span>
                                <Tags itemTag='320' color='green' size='small' />
                            </li>
                            <li className="categories-item">
                                <span>Category Name</span>
                                <Tags itemTag='320' color='green' size='small' />
                            </li>
                            <li className="categories-item">
                                <span>Category Name</span>
                                <Tags itemTag='320' color='green' size='small' />
                            </li>

                        </ul>

                        <ul className="brand_list">
                            <h3 className='sidebar-title'>Brands</h3>
                            {/* <Input type='checkbox' label='Filtre by brand item' /> */}
                        </ul>

                        
                    </div>
                    <div className="categories_content-product">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoriesPage
