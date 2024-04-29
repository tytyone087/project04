import React, { useRef, useState }  from 'react';
import { Div } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';


const Section01  = () => {
    return (
        <div className="relativ bg-primary" id='Section01 ' >
            <Div className='flex items-center'>
                <Swiper
                slidesPerView={1} //한 슬라이드에 보여줄 갯수
                spaceBetween={10} //슬라이드간 거리
                loop={true} //슬라이드 반복 여부
                autoplay={{ delay: 30000 }} //자동 슬라이드 시간
                modules={[Autoplay]}
                style={{ width: '50%', minHeight:'700px'}}
                
                >
                    <SwiperSlide style={{ height:'700px' }}>
                        <img src="./img/main1.webp" alt="Slide 1" style={{width:'100%', height:'100%', marginLeft: 0, marginRight:0, objectFit:'cover'
                        }} />
                    </SwiperSlide>
                    <SwiperSlide style={{ height:'700px' }}>
                        <img src="./img/main2.webp" alt="Slide 1" style={{width:'100%', height:'100%', marginLeft: 0, marginRight:0, objectFit:'cover'
                        }}  />
                    </SwiperSlide>
                    <SwiperSlide style={{ height:'700px' }}>
                        <img src="./img/main3.jpg" alt="Slide 1" style={{width:'100%', height:'100%', marginLeft: 0, marginRight:0, objectFit:'cover'
                        }}  />
                    </SwiperSlide>
                </Swiper>
                <Div width='50%' className='cursor-pointer'>
                    <div className='flex flex-col flex-wrap w-full pl-[50px]'>
                        <div className='block mb-5 py-2.5 w-full'>
                            <h1 className='text-[40px] font-semibold leading-normal -tracking-[1px] text-white'>우리 회사 식사 복지 파트너 <br />플레이팅</h1>
                        </div>
                        <div className='block mb-5 py-2.5 w-full'>
                            <p className='mb-4 text-xl leading-normal text-white'>사무실에서 매일 경험하는 셰프의 식탁<br />지금 플레이팅에 문의하세요.</p>
                        </div>
                        <div className='w-full'>
                            <div className='my-2.5'>
                                <div className='inline-block px-6 py-3 bg-white rounded-md'>
                                    <span className='flex items-center justify-center text-primary font-semibold text-[15px] leading-none'>상담 신청하기</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Div>
            </Div>
        </div>
    );
};

export default Section01;