import { useHistory } from 'react-router-dom';

export default function Query() {
    const history = useHistory();
    
    const user = history.location.state;
    const func = async () => {
        // alert(document.cookie);
        let response = await fetch('http://localhost:9999/credit', {
            method: 'GET',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        alert(await response.text());
        if (!response.ok){
            history.go(-1);
        }
    };
    return(
        <div>
            <h1>注意！！！</h1>
            <p>由于近日鄙人杂务缠身, 无暇美化表格, 因此使用朴素的alert方式告诉用户GPA信息, 在这里向出题者致歉! /狗头</p>
            <button onClick={func}>
                test
            </button>
        </div>
        
    );

    
}