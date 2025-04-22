import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(5)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (num) str += '0123456789'
    if (char) str += '!@#$%^&*()'

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, num, char, setPassword])

  const copyPasstoClip = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, num, char, passwordGenerator])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 ">

        Password Generator

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef} />

          <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0' onClick={copyPasstoClip}>
            copy
          </button>

        </div>

        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label >Length {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={num} id='numInput'
              onChange={() => { setNum((prev) => !prev) }} />
            <label>Num</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={char} id='charInput'
              onChange={() => { setChar((prev) => !prev) }} />
            <label>Char</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
