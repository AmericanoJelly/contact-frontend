import React, { useEffect, useState } from 'react';

type AddProps = {
    onSubmit: (form: { 
        name: string; 
        phoneNum:string,
        cno:string,
        adress:string,
        description: string }) => void;
}

const AddContact = ({onSubmit}:AddProps) => {
    const [addUser, setAddUser] = useState({
        name:'',
        phoneNum:'',
        cno:'',
        adress:'',
        description:''
    }); 
    const {name, phoneNum, cno, adress, description} = addUser;

    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
        setAddUser({
        ...addUser,
        [name]: value
    });
    }

    const [users, setUsers] = useState([
        {
        name:"정유진",
        phoneNum:"010-2335-5550",
        cno:"1",
        adress:"busan",
        description:"으아으아으아응아으으어거으건"
        }
    ]);

    const handleSubmit = () => {
        const user = {
            name,
            phoneNum,
            cno,
            adress,
            description
        }
        setUsers(users.concat(user));
        
        setAddUser({
            name:'',
            phoneNum:'',
            cno:'',
            adress:'',
            description:''
        }); // 초기화

        console.log("추가요: ", users);
      };

    useEffect(()=>{
        handleSubmit
    },[setUsers])
      
    
    return (
        <div>
            <h1>연락처를 등록하세요</h1>
          {/* <EditItem title="이름" />
          <EditItem title="전화번호" />
          <EditItem title="회사번호" />
          <EditItem title="주소" />
          <EditItem title="설명" /> */}

        <div className='editItem'>
            <label>이름</label>
            <input name="name" onChange={onChange}/>
            
            <label>전화번호</label>
            <input name="phoneNum" onChange={onChange}/>

            <label>회사번호</label>
            <input name="cno" onChange={onChange}/>

            <label>주소</label>
            <input name="adress" onChange={onChange}/>

            <label>설명</label>
            <input name="description" onChange={onChange}/>
        </div>
          <div className="buttonBox">
            <button aria-label="confirm" onClick={handleSubmit}>확인</button>
            <button aria-label="cancel">취소</button>
          </div>
        </div>
    );
};

export default AddContact;