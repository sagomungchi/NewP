import React, {useState} from 'react'
import Header from "../components/Header";
import {Form, Button, Input, Checkbox} from 'antd';

const Login = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
        });
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordChk = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };

    return (
        <Header>
            <Form onSubmit={onSubmit} style={{padding: 10}}>
                <div>
                    <label htmlFor="user-id">팀명(혹은 이름)</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} style={{width: 200}}/>
                </div>                
                <div>
                    <label htmlFor="user-pass">휴대폰번호</label>
                    <br/>
                    <Input name="user-pass" type="password" value={password} required onChange={onChangePassword}
                           style={{width: 200}}/>
                </div>
                <div>
                    <label htmlFor="user-password-chk">휴대폰 번호 확인</label>
                    <br/>
                    <Input name="user-password-chk" type="password" value={passwordCheck} required
                           onChange={onChangePasswordChk} style={{width: 200}}/>
                </div>
                <div>                   
                    {passwordError && <div style={{color: 'red'}}>휴대폰번호가 일치하지 않습니다..</div>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit">로그인</Button>
                </div>
            </Form>
        </Header>

    );
};
export default Login;