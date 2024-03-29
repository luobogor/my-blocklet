import React from 'react';
import './index.scss';
import IconCopy from '../../assets/images/icon-copy.png';

export default function Copy(props) {
  const copy = () => {
    let { text } = props;
    if (props.copyText !== null && props.copyText !== undefined) {
      text = props.copyText;
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      document.body.appendChild(textarea);
      textarea.style.position = 'fixed';
      textarea.style.clip = 'rect(0 0 0 0)';
      textarea.style.top = '10px';
      textarea.value = text;
      textarea.select();
      document.execCommand('copy', true);
      document.body.removeChild(textarea);
    }

    alert('copy success');
  };

  return (
    <div
      className="copy"
      onClick={(evt) => {
        evt.stopPropagation();
        copy();
      }}>
      <span>{props.text}</span>
      <img src={IconCopy} />
    </div>
  );
}
