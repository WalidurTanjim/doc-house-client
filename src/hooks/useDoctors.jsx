import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useDoctors = () => {
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async() => {
            const res = await axios.get('doctors.json');
            return res.data;
        }
    })

    return [ doctors, refetch ];
};

export default useDoctors;