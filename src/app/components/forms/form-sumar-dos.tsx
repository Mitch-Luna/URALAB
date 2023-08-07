"use client";
import sumarDosNumeros from "@/app/actions/sumar-dos-numeros";
import { HtmlHTMLAttributes, useState } from "react";
export default function FormSumarDosNumeros(){
    let [numero1,setNuemro1] = useState(0)
    let [numero2,setNuemro2] = useState(0)
    let [resultado,setResultado] = useState(0)
    const handleSumit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const suma = sumarDosNumeros(numero1, numero2);
        setResultado(suma)
    }
    return(
        <form className="" onSubmit={handleSumit}>
        <div className="h-auto">
            <h1>listado de roles</h1>
            <div className="flex flex-row ">
       
            <label className="basis-3/12 bg-gray-100">numero1</label>
            <div className="basis-9/12">
            <input type="number" name="numero1" id="numero1" value={String(numero1)} onChange={(e)=>setNuemro1(parseInt(e.target.value))}/>
            <div className=""></div>
            </div>
            </div>
            <div className="flex flex-row mt-2">
            <label className="basis-3/12 ">numero1</label>
            <div className="basis-9/12">
            <input type="number" name="numero2" id="numero2" value={String(numero2)} onChange={(e)=>setNuemro2(parseInt(e.target.value))}/>
            </div>
            </div>
        </div>
        <div className="flex flex-row mt-2">
            <button type="submit" className="bg-blue-500 text-white p-1">sumar</button>
        </div>
        <div className="flex flex-row mt-2">
        <label className="basis-auto text-right">El resultado es: {resultado}</label>
        </div>
        </form>
        
    );
}
