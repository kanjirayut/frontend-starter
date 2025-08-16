import React from 'react';
import { Input } from 'antd';

type Props = {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
};

const App: React.FC<Props> = ({ placeholder, label, disabled, required }) => {
  return (
    <div className='text-start'>
      {/* แสดง label ถ้ามีค่า */}
      {label && <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>}

      {/* ส่ง placeholder + disabled เข้า Input */}
      <Input placeholder={placeholder} disabled={disabled} required={required} />
    </div>
  );
};

export default App;
