import ChangeThemeModal from './ThemeModal';
import DesignModal from './DesignModal';
import NiceModal, {useModal} from '@ebay/nice-modal-react';
import {RoutingModalProps} from '../../providers/RoutingProvider';

const DesignAndThemeModal: React.FC<RoutingModalProps> = ({pathName}) => {
    const modal = useModal();

    if (pathName === 'design/edit') {
        return <DesignModal />;
    } else if (pathName === 'design/edit/themes') {
        return <ChangeThemeModal />;
    } else if (pathName === 'design/change-theme/install') {
        const url = window.location.href;
        const fragment = url.split('#')[1];
        const queryParams = fragment.split('?')[1];

        const searchParams = new URLSearchParams(queryParams);

        const ref = searchParams.get('ref') || null;
        const source = searchParams.get('source') || null;

        return <ChangeThemeModal source={source} themeRef={ref} />;
    } else {
        modal.remove();
    }
};

export default NiceModal.create(DesignAndThemeModal);
