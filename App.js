import React,{useState} from 'react'

export default function App() {

  const[valorTela,setValorTela]=useState('')
  const[resultado,setResultado]=useState(0)
  const[acumulador,setAcumulador]=useState(0)
  const[operado,Setoperado]=useState(false)

  const Tela=(valor,res)=>{
    return(
      <div style={cssTela}> 
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }

  const Btn=(label,onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }

  //FUNÇÕES

  const addDigitoTela=(d)=>{
    if((d=='+' || d=='-' || d=='*'|| d=='/')&& operado) 
    {
      console.log("+-*/")
      Setoperado(false)
      setValorTela(resultado + d)
      return
    }

    if(operado)
    {
      setValorTela(d)
      Setoperado(false)
      return
    }
    const valorDigitadoTela= valorTela + d
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria=()=>{ //limpa a memória da calculadora
    Setoperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const Operacao=(oper)=>{ //regra para a tecla backspace
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      Setoperado(false)
      return
    }
    try{
      const r=eval(valorTela) //Cálculo dos valores digitados
      setAcumulador(r)
      setResultado(r)
      Setoperado(true)
    }
    catch{
      setResultado('ERRO')
    }
  }
  
  //ESTILOS

  const cssConteiner={ //estilo do conteiner
    display:'flex', 
    justifyContent:'flex-start',
    alignItens:'center',
    flexDirection:'column',
    backgroundColor:'#337aff',
    color:"#fff",
    width:300,
    border:'1px solid #000'
  }

  const cssBotoes={ //estilo dos botões
    flexDirection:'row',
    flexWrap:'wrap'
  }

  const cssTela={ //estilo da tela
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItens:'flex-start',
    backgroundColor:'#3c47fa',
    flexDirection:'column',
    window:260
  }

  const cssTelaOper={ //estilo da tela de operações
    fontSize:25,
    color:'#fff',
    height:20
  }

  const cssTelaRes={ //estilo da tela de resultado (dividido em duas)
    fontSize:50,
    color:'#fff',
    height:60
  }

  const cssBtn={ //estilo dos botões da calculadora
    fontSize:30, 
    height:75,
    width:75,
    padding:20,
    backgroundColor:'#337aff',
    color:"#fff",
    borderColor: '#000',
    textAlign:'center',
    outline:'none'
  }

  return ( //montagem da calculadora na tela
    <>
    <div style={cssConteiner}>
      <h2>Calculadora</h2>
      {Tela(valorTela,resultado)}
      <div style={cssBotoes}>
        {Btn('AC',limparMemoria)}
        {Btn('(',()=>addDigitoTela('('))}
        {Btn(')',()=>addDigitoTela(')'))}
        {Btn('/',()=>addDigitoTela('/'))}
        {Btn('7',()=>addDigitoTela('7'))}
        {Btn('8',()=>addDigitoTela('8'))}
        {Btn('9',()=>addDigitoTela('9'))}
        {Btn('*',()=>addDigitoTela('*'))}
        {Btn('4',()=>addDigitoTela('4'))}
        {Btn('5',()=>addDigitoTela('5'))}
        {Btn('6',()=>addDigitoTela('6'))}
        {Btn('-',()=>addDigitoTela('-'))}
        {Btn('1',()=>addDigitoTela('1'))}
        {Btn('2',()=>addDigitoTela('2'))}
        {Btn('3',()=>addDigitoTela('3'))}
        {Btn('+',()=>addDigitoTela('+'))}
        {Btn('0',()=>addDigitoTela('0'))}
        {Btn('.',()=>addDigitoTela('.'))}
        {Btn('<-',()=>Operacao('bs'))}
        {Btn('=',()=>Operacao('='))}

      </div>
    </div>
    </>
  );
}

