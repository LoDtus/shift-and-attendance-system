import { Input } from 'antd';

const { TextArea } = Input;

export default function PositionConfig() {
    

    return (
        <div className="h-full p-2">
            
            <span className='font-semibold'>Postion</span>
            <Input
                className=''
                placeholder='Aa'
            />

            <span className='font-semibold'>Description</span>
            <TextArea
                rows={3}
                placeholder='Aa'
                allowClear
            />
        </div>
    );
};