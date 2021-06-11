import Button from './Button';
import { useSetRecoilState } from 'recoil';
import { refreshUsers } from '../util/apiConnection';
import { ForceReload } from '../util/tableState';
import '../sass/mainAppBar.scss';
import '../sass/button.scss';

export default function ButtonAppBar() {
    const reload = useSetRecoilState(ForceReload);

    return (
        <nav className='main-nav'>
            <h2 className='title'>RedSky User Cache Project</h2>
            <Button className='main-button' onClick={() => refreshUsers(reload)}>
                Refresh Users
            </Button>
        </nav>
    );
}