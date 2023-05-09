import React from "react";


const Card = ({ item, catu}) => {

    return (
        <a href={`#/products/${catu}/${item.id}`}>
            <div style={{ textAlign: 'center' }}>
                <img
                    className='multi__image'
                    src={item.url}
                    alt=''
                    style={{
                        width: '100%',
                        height: '170px',
                        objectFit: 'contain',
                        marginBottom: '10px',
                    }}
                />
                <p style={{ fontSize: '14px', padding: '5px 0' }}>{item.name}</p>
                <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
                    From ₹ {item.price}
                </p>
                <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray' }}>
                    {item.about}
                </p>
            </div>
        </a>
    );
};

export default Card;