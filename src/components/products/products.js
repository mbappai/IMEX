import React from 'react';
import classes from './products.module.css';


const Products= ()=>{

return(
    <section id='expertise' className={classes.products}>
   <header className={classes.products_header}>
         <h2 className={classes.sectionTitle}>EXPERTISE.</h2>
         <div className={classes.products__header__paragraph}>
        <p className={classes.sectionSubTitle}>We pride ourselves for having access to China's best manufacturers for the following product categories.</p>
         </div>
         </header>
        <div className={classes.products__content}>
        {productData.map(product=>(
             <article className={classes.product_box}>
                 <h4 className={classes.product_header}>{product.heading}</h4>
                 <div className={classes.product_desc}>
                 <p className={classes.desc_text}>{product.description}</p>
                 </div>
             </article>
        ))}
        </div>

    </section>
)
}

export default Products

   



const productData=  [
    {
        id:"0",
        heading:'furniture',
        description:'We source furniture for wholesalers, retail stores and furniture for home use. We will help you get quality furniture from the best chinese suppliers at very low prices',

   },
   {
    id:"1",
    heading:'machinery',
    description:'Complete production lines, packaging machines, agricultural machinery, both large and small scale are major product categories for secure imex',

},
{
    id:"2",
    heading:'home appliances',
    description:'Are you looking to buy home appliances for personal use or resale? We will help you source quality appliances at the most competitive prices.',

},
{
    id:"3",
    heading:'sports equipments',
    description:'Modern and high quality sports and entertainment equipments for both indoor and outdoor use.',

},
{
    id:"4",
    heading:'food equipments',
    description:'Source high quality food equipments for restaurants, ice-creams/ coffee shops, bakeries both for commercial use or retail',

}
] 
