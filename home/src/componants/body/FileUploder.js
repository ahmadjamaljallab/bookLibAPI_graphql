import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

export default function FileUploder() {
    return (
        <StorageManager
            acceptedFileTypes={['image/*']}
            accessLevel="guest"
            maxFileCount={1}
            isResumable
        />
    );
};