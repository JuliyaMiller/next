export default function GoodsCart({good}) {
    

    return (
        <div>
            <h2>{good.title}</h2>
            <h3>{good.category}</h3>
            <img src={good.image} width="200px"/>
            <h4>{good.description}</h4>
            <h2>{good.rating.count}$</h2>
            
        </div>
    )
}
