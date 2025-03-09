import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
    return (
        <Stack className="loading-wrapper items-center py-4">
            <CircularProgress size={40} color="primary" />
        </Stack>
    )
}