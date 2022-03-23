import React, {useState} from 'react';
import {Pass} from './pass';
import './change_name_button.css';

const ChangeNameButton = () => {
  const [name, setName] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  const getAllCacheData = async () => {
    const url = 'https://fcu-d0813127.github.io/fcu_pass1/';
    // const url = 'http://localhost:3000/';
    const names = await caches.keys();
    for (let i = 0; i < names.length; i++) {
      const cacheStorage = await caches.open(names[i]);
      const cacheResponse = await cacheStorage.match(url);
      const data = await cacheResponse.json();
      setName(data);
    }
  };

  const addDataIntoCache = (cacheName, url, response) => {
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      })
    }
  };

  const changeHandler = () => {
    const name = prompt("請輸入你的名字：");
    if (name == null) {
      return;
    }
    setName(name);
    addDataIntoCache('name', 'https://fcu-d0813127.github.io/fcu_pass1/', name);
    // addDataIntoCache('name', 'http://localhost:3000/', name);
  };

  getAllCacheData();
  return (
    <div className='button-group'>
      <button className='button' onClick={handleShow}>Show Pass</button>
      <button className='button' onClick={changeHandler}>Change Name</button>
      <Pass name={name} isShow={isShow} handleClose={handleClose} />
    </div>
  );
};

export {ChangeNameButton};