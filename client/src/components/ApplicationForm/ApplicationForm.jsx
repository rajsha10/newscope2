
import styles from './ApplicationForm.module.css';

const ApplicationForm = ({ handleSubmit, formData, handleChange, message }) => {
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Application Form</h2>
            {message && <p className={styles.message}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="contact">Contact Number:</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    );
};

export default ApplicationForm;
