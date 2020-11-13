import React from 'react'
const Card = ({email,name,id}) => {
        return (
            <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
                <div>
                    <h1>{name}</h1>
                    <h4>{email}</h4>
                </div>
            </div>
        );
}
export default Card;