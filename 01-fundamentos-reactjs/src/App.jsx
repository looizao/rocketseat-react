import { Head } from './components/Head';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Head />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
