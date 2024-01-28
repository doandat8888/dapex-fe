import { Avatar } from '@nextui-org/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuthStore, useUserStore } from '../../stores/useUserStore';
import imageType from 'image-type';

const UserAvatar = () => {

    const token = useAuthStore.getState().token;
    const [user, getUserProfile] = useUserStore((state) => [state.userProfile, state.getCurrentUser])

    useEffect(() => {
        getUserProfile();
    }, [token, getUserProfile]);

    return (
        <div className='flex text-sm items-center space-x-2'>
            <Avatar showFallback src={imageType(user?.avt) !== undefined ? user?.avt : 'https://images.unsplash.com/broken'} size='sm'/>
            <p>{user?.name}</p>
        </div>
    )
}

export default UserAvatar