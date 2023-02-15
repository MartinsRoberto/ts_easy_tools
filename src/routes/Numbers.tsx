import React, { useEffect, useState } from 'react'

type Props = {}

const Numbers = (props: Props) => {
  const [binario, setBinario] = useState<string>('')
  const [hexa, setHexa] = useState<string>('')
  const [octa, setOcta] = useState<string>('')
  const [decimal, setDecimal] = useState<string>('')

  const converBinario = (value: string):void  => {
    const convert: number = parseInt(value,2) 
    
    setBinario(value)
    setHexa(convert.toString(16))
    setOcta(convert.toString(8))
    setDecimal(convert.toString(10))
  }

  return (
    <div id='numbers'>
      <h2>Numbers</h2>
      <form action="">
        <label>
          <span>Binário</span>
          <input type="text" value={binario} onChange={(e) => converBinario(e.target.value)} />
        </label>
        <label>
          <span>Hexadecimal</span>
          <input type="text" value={hexa} onChange={(e) => setHexa(e.target.value)} />
        </label>
        <label>
          <span>Octadecimal</span>
          <input type="text" value={octa} onChange={(e) => setOcta(e.target.value)} />
        </label>
        <label>
          <span>Decimal</span>
          <input type="text" value={decimal} onChange={(e) => setDecimal(e.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default Numbers
// import React, { useEffect, useState } from 'react'

// type Props = {}

// type FormFields = {
//   binario: string;
//   hexa: string;
//   octa: string;
//   decimal: string;
// }

// const formTemplate: FormFields = {
//   binario: "",
//   hexa: "",
//   octa: "",
//   decimal: "",
// }

// const Numbers = (props: Props) => {
//   const [data, setData] = useState(formTemplate)

//   const updateFieldHandler = (key: string, value: string): void => {
//     if (key == 'binario') {
//       setData((prev) => {
//         return { ...prev, [key]: value }
//       })
//     }
//     // setData((prev) => {
//     //   return { ...prev, [key]: value }
//     // })
//   }



//   return (
//     <div id='numbers'>
//       <h2>Numbers</h2>
//       <form action="">
//         <label>
//           <span>Binário</span>
//           <input type="text" value={data.binario} onChange={(e) => updateFieldHandler("binario", e.target.value)} />
//         </label>
//         <label>
//           <span>Hexadecimal</span>
//           <input type="text" value={data.hexa} onChange={(e) => updateFieldHandler("hexa", e.target.value)} />
//         </label>
//         <label>
//           <span>Octadecimal</span>
//           <input type="text" value={data.octa} onChange={(e) => updateFieldHandler("octa", e.target.value)} />
//         </label>
//         <label>
//           <span>Decimal</span>
//           <input type="text" value={data.decimal} onChange={(e) => updateFieldHandler("decimal", e.target.value)} />
//         </label>
//       </form>
//     </div>
//   )
// }

// export default Numbers