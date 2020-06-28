import React from 'react'
import StartSection from '../sections/StartSectionComponent'
import BannerStartSection from '../sections/BannerStartSectionComponent'
import Image from 'react-bootstrap/Image'
import Loading from '../root/LoadingComponent'
import { Link } from 'react-router-dom'
import BtnFluid from '../buttons/BtnFluid'
import { baseUrl } from '../../shared/baseUrl'

function RenderDishMenuItem({ dish }) {
    return (
       <div className="dish-item">
            <div className="dish-item__image">
               <Image src={baseUrl + dish.image} fluid className="dish-photo" />
               <div className="dish-item__image-overlay">
                    <Link to={`/restaurant/${dish.id}`}>
                        <i className="fas fa-eye"></i>
                    </Link>
               </div>
            </div>
           <div className="dish-item__body">
                <div className="dish-name">
                    <Link to={`/restaurant/${dish.id}`}>
                        {dish.name}
                    </Link>
                </div>
                <div className="dish-price">
                    {dish.price} $
                </div>
           </div>
       </div> 
    );
}

function RenderDishesCategory({name, dishes}) {
    return(
        <div className="dishes-category">
            <h3 className="dishes-category-title">
                {name}
            </h3>
            <div className="dishes-list">
                {dishes}
            </div>
        </div>  
    )
}

const Restor = (props) => {
    const menuDishes = props.dishes.dishes.map((dish) => {
        if (props.dishes.isLoading) {
           return(<Loading />);
        } else if (props.dishes.errMess) {
           return(<h4>{props.dishes.errMess}</h4>);
        } else if (dish.category === "food") {
            return (
                <RenderDishMenuItem
                    dish={dish}
                    key={dish.id}
                />
            );
        } else {
            return null;
        }
    });

    const menuDeserts = props.dishes.dishes.map((dish) => {
        if (props.dishes.isLoading) {
           return(<Loading />);
        } else if (props.dishes.errMess) {
           return(<h4>{props.dishes.errMess}</h4>);
        } else if (dish.category === "desert") {
            return (
                <RenderDishMenuItem
                    dish={dish}
                    key={dish.id}
                />
            );
        } else {
            return null;
        }
    });

    const menuDrinks = props.dishes.dishes.map((dish) => {
        if (props.dishes.isLoading) {
           return(<Loading />);
        } else if (props.dishes.errMess) {
           return(<h4>{props.dishes.errMess}</h4>);
        } else if (dish.category === "drink") {
            return (
                <RenderDishMenuItem
                    dish={dish}
                    key={dish.id}
                />
            );
        } else {
            return null;
        }
    });

    return (
        <div>
            <StartSection
                bgi="restor-start start-section"
            >
                <BannerStartSection
                    title="Restaurant"
                    subtitle="dolor sit amet consectetur adipisicing elit"
                />   
            </StartSection>
            <section className="section section-light dishes-section">
                <div className="container">
                    <RenderDishesCategory
                        name="Dishes"
                        dishes={menuDishes}
                    />
                    <RenderDishesCategory
                        name="Deserts"
                        dishes={menuDeserts}
                    />
                    <RenderDishesCategory
                        name="Drinks"
                        dishes={menuDrinks}
                    />
                </div>
            </section>
            <BtnFluid
                half={false}
                link="/rooms"
                text="go to rooms list"
                icon={<i className="fas fa-store-alt"></i>}
            />
        </div>
    )
}

export default Restor;
