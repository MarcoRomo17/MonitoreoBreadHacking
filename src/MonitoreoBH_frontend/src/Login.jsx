import React, { useState } from 'react';
import { Button, Card, Container, Modal, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthClient } from '@dfinity/auth-client';

export const NLogin = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleLoginII = async () => {
        try {
            const authClient = await AuthClient.create();
            await authClient.login({
                identityProvider: 'https://identity.ic0.app',
                onSuccess: async () => {
                    const identity = authClient.getIdentity();
                    const principal = identity.getPrincipal().toText();

                    const response = await fetch('http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/ii-login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ principal })
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        console.error('Error response:', errorText);
                        setIsSuccess(false);
                        setModalMessage('Error en la autenticación con Internet Identity');
                        return; // Salir si hay error
                    }

                    const data = await response.json();
                    setIsSuccess(true);
                    setModalMessage(`Bienvenido usuario de II con principal: ${data.principal}`);
                },
                onError: (err) => {
                    console.error('Error en el login', err);
                    setIsSuccess(false);
                    setModalMessage('Error en la autenticación con Internet Identity');
                }
            });
        } catch (error) {
            console.error('Error en el proceso de login', error);
            setIsSuccess(false);
            setModalMessage('Hubo un error en la conexión con el servidor');
        } finally {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Container className="mt-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Login con Internet Identity</Card.Title>
                        <Card.Text>
                            Inicia sesión de forma más sencilla con Internet Identity de ICP.
                        </Card.Text>
                        <Button variant="primary" onClick={handleLoginII}>
                            Iniciar sesión
                        </Button>
                    </Card.Body>
                </Card>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{isSuccess ? 'Éxito' : 'Error'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant={isSuccess ? 'success' : 'danger'}>
                        {modalMessage}
                    </Alert>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
