import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './MainSection/App.jsx'
import Profile from './ProfileSection/Prorile.jsx'
import About from './AboutSection/About.jsx'
import ShoppingList from './ProductsSection/products.jsx'
import TicTacToe from './TicTacToe/TicTacToe.jsx'
import ThinkingSection from './ThinkingSection/thinking.jsx'
import TypeScriptTest from './TypeScript/App'
import MyFirstUiReact from './Ui/MyFirstComponent/ui.jsx'
import Props from './Ui/Props/props.jsx'
import ConditionRender from './Ui/ConditionRender/ConditionRender.jsx'
import EventHandlers from './AddingInteractivity/EventHandlers/EventHandlers.jsx'
import StateComponents from './AddingInteractivity/StateComponents/StateComponents.jsx'
import StateAsSnapshot from './AddingInteractivity/StateAsSnapshot/StateAsSnapshot.jsx'
import AddUpdateQueue from './AddingInteractivity/AddUpdateQueue/AddUpdateQueue.jsx'
import UpdatingObject from './AddingInteractivity/UpdatingObj/UpdatingObj.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/*<App />*/}
      {/*<About />*/}
      {/*<Profile />*/}
      {/*<ShoppingList />*/}
      {/*<TicTacToe />*/}
      {/*<ThinkingSection />*/}
      {/*<TypeScriptTest />*/}
      {/*<MyFirstUiReact />*/}
      {/*<Props />*/}
      {/*<ConditionRender />*/}
      {/*<EventHandlers />*/}
      {/*<StateComponents />*/}
      {/*<StateAsSnapshot />*/}
      {/*<AddUpdateQueue />*/}
      <UpdatingObject />
  </StrictMode>
)
