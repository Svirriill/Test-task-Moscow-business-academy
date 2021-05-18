import './Block.css';
function Block({ block }) {

  return (
<div className='block'>
    <h3 className='block__title'>{block.title}</h3>
    <div className='block__container'>
      <div className='block__container block__container_module-1'>
        <p className='block__paragraph'>1 модуль</p>
        <ul className='block__content'>
        <li className='block__item'><span className='block__item_span'>{block.specializedSubjects[0]}</span></li>
        <li className='block__item'><span className='block__item_span'>{block.specializedSubjects[1]}</span></li>
        <li className='block__item'><span className='block__item_span'>{block.specializedSubjects[2]}</span></li>

        </ul>
      </div>
      <div className='block__container block__container_module-2'>
        <p className='block__paragraph'>2 модуль</p>
        <ul className='block__content'>
        <li className='block__item'><span className='block__item_span'>{block.specializedSubjects[3]}</span></li>
        <li className='block__item'><span className='block__item_span'>{block.specializedSubjects[4]}</span></li>
        </ul>
      </div>
    </div>
</div>
  )}

export default Block;
