import { useState } from 'react';
import Button from './Button';

const EventHandle = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Counter />

            <div className="password">
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <h2>{username}</h2>
                <h2>{showPassword ? password : '*'.repeat(password.length)}</h2>
                <Button
                    btnText={`${!showPassword ? 'Show' : 'Hide'} password`}
                    onClick={(e) => {
                        setShowPassword(!showPassword);
                    }}
                />
            </div>
        </>
    );
};

const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    };
    const sub = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter">
            <Button btnText="-" onClick={sub} />
            <span className={count === 0 ? 'zero' : count > 0 ? 'pos' : 'neg'}>
                {count}
            </span>
            <Button btnText="+" onClick={add} />
        </div>
    );
};

export default EventHandle;
