import { ToggleSwitch } from "flowbite-react"
import { useCallback, useState } from "react"

export default function Home() {

    const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''} h-full w-full`}>
        <div className={`dark:bg-slate-900 bg-red h-full w-full`}>
<ToggleSwitch checked={darkMode} onChange={(e) => setDarkMode(e)} label="Dark Mode"/>
        </div>
    </div>
  )
}
