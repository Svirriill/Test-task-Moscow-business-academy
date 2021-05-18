import './Blocks.css';
import Block from '../Block/Block.js';
import LastBlock from '../LastBlock/LastBlock';

function Blocks({ block }) {
return (
    <div className='blocks'>
        <ul className='blocks__item'>
        {
        block.map((block) => (
                    <Block
                        block={block}
                        key={block._id}
                    />
                ))
        }
        </ul>
    <LastBlock />
    </div>
)}

export default Blocks;
