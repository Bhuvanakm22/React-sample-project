import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './DialogBoxHeader.module.css';

function DialogBoxHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
         Task List
      </h1>
      <p>
        <button type='button' className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default DialogBoxHeader;