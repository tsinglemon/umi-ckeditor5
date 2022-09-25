import React, { Component } from 'react';
import styles from './index.less';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';


export default class extends Component {
  componentDidMount() {
    // ClassicEditor
    //   .create(document.querySelector('#editor'), {
    //     plugins: [Essentials, Paragraph, Bold, Italic],
    //     toolbar: ['bold', 'italic']
    //   })
    //   .then(editor => {
    //     console.log('Editor was initialized', editor);
    //   })
    //   .catch(error => {
    //     console.error(error.stack);
    //   });
  }
  render() {
    return <div className={styles.wrap}>

      {/* <div id="editor"></div> */}
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [Paragraph, Bold, Italic, Essentials],
          toolbar: ['bold', 'italic']
        }}
        data="<p>Hello from the first editor working with the context!</p>"
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor1 is ready to use!', editor);
        }}
      />

    </div>
  }
}