import EmojiCard from './EmojiCard';
import './style.scss';

const Content = ({ data }) => {
    return (
        <div className="content">
            { data?.map((emoji, ind) => {
                return (
                    <EmojiCard key={ ind } emoji={ emoji } />
                )
            }) }
        </div>
    )
}

export default Content;