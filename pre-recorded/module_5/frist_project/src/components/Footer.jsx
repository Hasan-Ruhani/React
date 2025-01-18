
const Footer = ()=> {
    let marks = 85;
    return(
        <>
            {marks >= 80 ? <p>Brillienat resutl</p> : <p>Avarage result</p>}
            {(()=> {
                if(marks > 80 && marks < 100){
                    return <p>A+</p>
                }
                else if(marks > 70 && marks < 80){
                    return <p>A</p>
                }
                else if(marks > 60 && marks < 70){
                    return <p>A-</p>
                }
                else if(marks > 50 && marks < 60){
                    return <p>B</p>
                }
                else if(marks > 40 && marks < 50){
                    return <p>C</p>
                }
                else{
                    return <p>F</p>
                }
            })()}
        </>
    );
}

export default Footer