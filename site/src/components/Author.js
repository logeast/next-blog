import { Avatar, Divider } from 'antd';

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                {' '}
                <Avatar
                    size={100}
                    src="https://portrait.gitee.com/uploads/avatars/user/2682/8047784_logeast_1601777527.png"
                />
            </div>
            <div className="author-introduction">
                夜月楼台，秋香院宇。笑盈盈地人来人去。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="qq" className="account" />
                <Avatar size={28} icon="wechat" className="account" />
            </div>
        </div>
    );
};

export default Author;
