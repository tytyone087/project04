import React from 'react';
import { Div } from '../components';
import { Link } from 'react-router-dom';
import { Button } from '../theme/daisyui';
import { useState } from 'react';


const Header = () => {
    const [isHovering, setIsHovering] = useState(false);
    
    return (
        <header className='fixed inset-x-0 top-0 z-50 w-auto bg-white border-b border-solid header border-neutral-200' >
            <nav style={{minHeight:'80px', maxWidth:'1072px'}}  className='relative p-0 mx-auto element_cont'>
                <div className="flex flex3">
                    <Link to='/' className="w-1/5 plating_logo">
                        <div className='flex flex-wrap items-center content-center mx-3 my-5' >
                            <img src=" https://plating.co.kr/wp-content/uploads/2023/11/plating_logo.png "   style={{width:'118px', maxWidth:'118px'}}   />
                        </div>
                    </Link>
                    <Div className="relative flex min-h-1" id="navbar" width='65%'>
                        <ul className="flex flex-row flex-wrap content-center justify-end w-full p-0 m-0 my-3 ml-5 leading-normal navbar-nav whitespace-nowrap ">
                            <li className="relative block nav-item font-semibold py-2.5 px-5">
                            <Link className="nav-link hover:text-primary">구독 플랜</Link>
                            </li>
                            <li className="relative block nav-item font-semibold py-2.5 px-5 whitespace-nowrap">
                            <Link className="nav-link hover:text-primary">이벤트 케이터링</Link>
                            </li>
                            <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)} className="relative block nav-item font-semibold py-2.5 px-5 dropdownbar whitespace-nowrap" >
                            <Link className="nav-link hover:text-primary" >
                                블로그
                            </Link>
                            {isHovering?
                            (
                                <ul className="absolute left-0 py-2 bg-white drop-menu min-w-40 mt-2.5">
                                    <li ><Link className="dropdown-item py-2.5 pr-2.5 pl-5 flex items-center hover:text-primary"  >플레이팅 소식</Link></li>
                                    <li><Link className="py-2.5 pr-2.5 pl-5 dropdown-item flex items-center hover:text-primary">고객사 이야기</Link></li>
                                    <li><Link className="py-2.5 pr-2.5 pl-5 dropdown-item flex items-center hover:text-primary" >인사이트</Link></li>
                                    <li><Link className="py-2.5 pr-2.5 pl-5 dropdown-item flex items-center hover:text-primary">크루 인터뷰</Link></li>
                                    <li><Link className=" py-2.5 pr-2.5 pl-5 dropdown-item flex items-center hover:text-primary">언론보도</Link></li>
                                </ul>
                            ) : ('')

                            }
                            
                            </li>
                        </ul>
                    </Div>
                    <Div className='flex justify-center' width='14.33%'>
                        <div className='flex items-center justify-center my-3'>
                            <div className='w-full'>
                                <div className='px-6 py-3 text-sm font-semibold text-white rounded-lg cursor-pointer bg-primary'  >
                                    <span className='flex leading-none '>
                                        <span className='inline-block leading-none grow'>상담 신청</span>
                                    </span>
                                   
                                </div>
                            </div>
                        </div>
                    </Div>
                </div>
            </nav>
            
        </header>
    );
};

export default Header;