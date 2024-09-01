import { useState } from 'react';
import styles from './ProjectPage.module.css'; // Importer le CSS Module

const ProjectPage = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (event) => {
        const selectedStartDate = event.target.value;
        setStartDate(selectedStartDate);

        // Mettre à jour la date de fin pour ne pas être avant la date de début
        if (endDate && selectedStartDate > endDate) {
            setEndDate('');
        }
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    return (
        <div className={styles.container}>
            <img src="logo-placeholder.png" alt="Logo" className={styles.logo} />
            <div className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nom du projet</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Date début</label>
                    <input
                        type="date"
                        className={styles.input}
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nom du client</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Description du projet</label>
                    <textarea className={styles.textarea}></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Date fin</label>
                    <input
                        type="date"
                        className={styles.input}
                        value={endDate}
                        onChange={handleEndDateChange}
                        min={startDate} // Ne permet pas de sélectionner une date avant la date de début
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Contact</label>
                    <input type="text" className={styles.input} />
                </div>
                <button className={styles.button}>Enregistrer le projet</button>
            </div>
            
            <div className={styles.tableContainer}>
                <h3>Devis</h3>
                <input
                    type="file"
                    id="fileUpload"
                    className={styles.fileInput}
                    accept=".pdf,image/*,.doc,.docx"
                />
                <label htmlFor="fileUpload" className={styles.uploadButton}>
                    Téléverser le devis
                </label>
            </div>
            <div className={styles.tableContainer}>
                <h3>Enregistrer un achat</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Désignations (intrant ou MP)</th>
                            <th>Quantité</th>
                            <th>Prix unitaire</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" className={styles.input} /></td>
                            <td><input type="number" className={styles.input} /></td>
                            <td><input type="text" className={styles.input} /></td>
                        </tr>
                    </tbody>
                </table>
                <button className={styles.registerButton}>Enregistrer</button>
            </div>
           
            <button className={styles.viewDifferences}>Voir les écarts</button>
        </div>
    );
};

export default ProjectPage;
