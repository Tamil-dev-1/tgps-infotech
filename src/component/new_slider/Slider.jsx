import "./slider.css";
import Blockchain_Img from '../../assets/images/home/blockchain.jpg'
import Nxt_Gen_Img from '../../assets/images/home/Next-Gen.jpg'
import Smart_financial_Img from '../../assets/images/home/Smart-Financial.jpg'
import RWA_Img from '../../assets/images/home/RWA.jpg'

export default function TechSection(){

const items=[
{
title:"Blockchain Systems",
desc:"Redefining trust with secure, decentralized digital infrastructure.",
img:Blockchain_Img
},
{
title:"Next-Gen Digital Experiences",
desc:"Building platforms that go beyond interaction — creating connected ecosystems.",
img:Nxt_Gen_Img
},
{
title:"Smart Financial Systems",
desc:"Engineering secure, scalable fintech solutions for modern businesses.",
img:Smart_financial_Img
},
{
title:"RWA Tokenization",
desc:"Transfer ownership & storage speedily without any centralized finance entity",
img:RWA_Img
}
];

return(

<section className="web3-section">

<h2 className="titles">
 Our Blockchain <span style={{color:"#C6FF00"}}>Technology</span>
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