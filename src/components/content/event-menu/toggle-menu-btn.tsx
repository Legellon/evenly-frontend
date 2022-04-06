import './toggle-menu-btn.css';

interface ToggleMenuProps {
    collapsed: boolean
}

export default ({ collapsed }: ToggleMenuProps) => {
    return (
        <div className='btn toggle-panel-btn'>
            {collapsed ?
                (
                    <>
                        <i className='ri-arrow-right-s-fill right-icon' />
                        <i className='ri-arrow-up-s-fill up-icon' />
                    </>
                ) :
                (
                    <>
                        <i className='ri-arrow-left-s-fill left-icon' />
                        <i className='ri-arrow-down-s-fill down-icon' />
                    </>
                )}
        </div>
    );
}