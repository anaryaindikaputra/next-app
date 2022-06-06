/**
 * @stylingDependencies
 */
// Material UI Styling Dependencies
import { useStyles } from './styles';
// Local Styling Dependencies
import styles from '@/styles/product/Product.module.css';

/**
 * @componentDependencies
 */
// Material UI Components Dependencies
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

/**
 * @utilityDependencies
 */
// React Dependencies
import { useState } from 'react';
// Apollo Client Dependencies
import { useMutation } from '@apollo/client';

/**
 * @dataDependencies
 */
// Schema Dependencies
import { POST_SUBSCRIBE_BY_EMAIL } from '@/schema/subscribe-schema';

export default function SubscriptionForm() {
    // Initialize Material UI styling
    const productStyles = useStyles();

    // Define Modal Box Styling
    const modalBoxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    // Initialize React useState Hooks
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState({});
    const [showModal, setShowModal] = useState(false);

    /**
     * @func Initialize useMutation
     * @type [mutateFunction: function, mutateObject: object ]
     * @desc mutateFunction: mutate function that can be called at any time to execute the muatation
     * @desc mutateObject: an object with field that represents the current status of the mutation's
     * execution (data, loading, etc)
     */
    const [subscription, { loading, data, error }] = useMutation(POST_SUBSCRIBE_BY_EMAIL);
    // Track mutation status
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    /**
     * @func Send subscription data
     */
    async function subscribeNewsletter(e) {
        e.preventDefault();

        // Post subscription data
        const res = await subscription({
            variables: {
                email: email
            }
        });

        setResponse(res.data.subscribe.status);
        setEmail('');

        handleOpenModal();
    }

    /**
     * @func Function for displaying modal
     */
    function handleOpenModal() {
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <form
            className={styles.subscriptionsForm}
            onSubmit={e => { subscribeNewsletter(e) }}
        >
            <TextField
                className={productStyles.newsletterInput}
                required
                id="newsletter-email"
                label="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Button
                className={productStyles.newsletterButton}
                variant="contained"
                type="submit"
            >
                Subscribe
            </Button>

            <Modal
                open={showModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalBoxStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Subscriptions
                    </Typography>
                    <hr />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {response.message}
                    </Typography>
                </Box>
            </Modal>
        </form>
    )
}