import styles from './Login.module.css'; // Importez le CSS Module
import backgroundImage from '/src/assets/Images/baground1.jpeg';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img 
                    src={backgroundImage} 
                    alt="Background" 
                    className={styles.image} 
                />
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Connectez-vous</h2>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Mot de passe</label>
                        <input type="password" id="password" className={styles.input} />
                    </div>
                    <button type="submit" className={styles.button}>Connexion</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
