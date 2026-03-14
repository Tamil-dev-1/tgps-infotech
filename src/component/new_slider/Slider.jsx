import "./slider.css";

export default function TechSection(){

const items=[
{
title:"BLOCKCHAIN",
desc:"Antier delivers breakthrough blockchain solutions.",
img:"https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg"
},
{
title:"METAVERSE & GAMING",
desc:"We create the critical mass needed to help.",
img:"https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
},
{
title:"FINANCE SOLUTIONS",
desc:"Through our extensive industry expertise we deliver .",
img:"https://images.pexels.com/photos/1595244/pexels-photo-1595244.jpeg"
},
{
title:"ARTIFICIAL INTELLIGENCE",
desc:"We activate next generation algorithms to generate.",
img:"https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg"
}
];

return(

<section className="web3-section">

<h2 className="titles">
Blockchain
</h2>

<ul className="panel-list">

{items.map((item,index)=>(
<li key={index}>

<img src={item.img} alt={item.title}/>

<div className="panel-text">
<h3>{item.title}</h3>
<h4>{item.desc}</h4>
</div>

</li>
))}

</ul>

</section>

)
}