import React from 'react';
import {ChangeNameButton} from './change_name_button';
import './backgcolor.css';
import './background.css';

const Background = () => {
  const date_ = new Date();
  const dateForm_ = {
    year: date_.getFullYear(),
    month: date_.getMonth() + 1,
    day: date_.getDate(),
    hour: date_.getHours(),
    minute: date_.getMinutes(),
    second: date_.getSeconds()
  };

  /**
   * @param {function(): string}
   */
  const generateNow_ = () => {
    let clock, hour;
    if (dateForm_.hour <= 12) {
      hour = dateForm_.hour;
      clock = '上午';
    } else {
      hour = dateForm_.hour - 12;
      clock = '下午';
    }
    return `最後更新時間：${dateForm_.year}/${dateForm_.month}/${dateForm_.day}` +
           ` ${clock} ${hour.toLocaleString().padStart(2, '0')}:` +
           `${dateForm_.minute.toLocaleString().padStart(2, '0')}:` +
           `${dateForm_.second.toLocaleString().padStart(2, '0')}`;
  };

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <span className='statusbar'>
              <div className='title'>自主健康管理系統（A430101）</div>
            </span>
          </div>
        </div>
        <div className="row" style={{fontSize: 'medium'}}>
          <div className="col-md-12">
            <span style={{fontWeight: 'bold'}}>一、基本資料</span><br />
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>姓名：</span> 測試員    <span style={{fontWeight: 'bold'}}>學號/證號：</span>D0123456
            </div>
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>科系/單位：</span>                    
              <span>測試系</span>
            </div>
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>聯絡手機：</span>
              <span>
                0123456789 
              </span>
            </div>
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>住宿地址：</span>           
              <span>
                台北101
              </span>
            </div>    
            <div style={{fontWeight: 'bold', marginTop: '10px', marginBottom: '10px', color: '#a94442'}}>國內疫情嚴峻，請務必入校全程佩戴口罩，做好自身健康管理。</div>
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>1. 請問是否已施打過新冠肺炎疫苗？</span>
              <span>
                有，已經完成兩劑
              </span>
            </div>
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>2. 111年1月20日後至今，是否有出國或入境紀錄？</span>
              <span>
                沒有至其他國家
              </span>
            </div>
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>3. 近一個月內是否有與自國外返台之親友接觸？</span>
              <span>
                無
              </span>
            </div>   
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>4. 111年1月25日後，是否收到政府機關發送居家隔離或自主健康管理之通知？</span>
              <span>
                無
              </span>
            </div>  
            <div style={{marginTop: '5px'}}>
              <span style={{fontWeight: 'bold'}}>5. 近14天內，是否有喉嚨痛、頭痛、流鼻水、發燒、咳嗽、胸痛、呼吸道不適，失去嗅味覺等症狀？</span>
              <span>
                否，無上症狀<br />
              </span>
            </div>             
            <div style={{marginTop: '5px', marginBottom: '20px', fontWeight: 'bold'}}>
              若上述資料有異動，請隨時主動更新，謝謝您的配合。<input className='btn btn-primary' type="button" defaultValue="編輯基本資料" />     
            </div>
          </div>
        </div>
        <div className='row' style={{fontSize: 'medium'}}>
          <div className='col-md-9' style={{width: 'auto'}}>
            <span style={{fontWeight: 'bold'}}>二、體溫記錄表</span>
            <br />
            <span style={{marginTop: '5px'}}>{generateNow_()}</span>
            <div className={`custombtn backgcolor${date_.getDay()}`} style={{marginTop: '5px', marginLeft:'5px'}}>PASS</div>
            <br />
            <div style={{fontSize: 'large', backgroundColor: 'yellow', color: 'black'}}>
              1. 即日起，進入校園者均須佩戴口罩。<br />
              2. 若有發燒、呼吸道症狀、嗅味覺異常或腹瀉等相關症狀，請假勿入校，並儘速就醫。若有接觸史，請至醫院急診就診並告知接觸史。<br />
              3. 請誠實填寫，有症狀護理師將會進行關懷及追蹤，並請確實就醫，並至症狀明顯改善或康復後再入校，確保自己與他人健康。
            </div>
          </div>
        </div>
      </div>
      <ChangeNameButton />
    </div>
  );
};

export {Background};