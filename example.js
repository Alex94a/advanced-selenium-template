import { SessionManager } from './src/services/session.js'
import { Logger } from './src/utils/logger.js';


/**
 * Simple GitHub repository visit example
 */
export async function example() {
    const logger = new Logger('example');
    let manager;
    let sessionId;

    try {
        // Initialize the session manager
        manager = new SessionManager();
        await manager.initialize();
        logger.info('Session manager initialized');

        // Create a new session
        sessionId = 'example-session';
        const { actions } = await manager.createSession(sessionId, {
            headless: false,
            proxy: "database",
            fingerprint: "database"
        });
        logger.info('Browser session created successfully');

        try {
            await actions.navigate('https://abrahamjuliot.github.io/creepjs/');

            await new Promise(resolve => setTimeout(resolve, 5000));
            
            await actions.screenshot('creepjs.png');

            logger.info('Example completed successfully');
        } catch (error) {
            logger.error(`Error during example: ${error.message}`);
            throw error;
        } finally {
            if (sessionId) {
                logger.info('Cleaning up session...');
                await manager.closeSession(sessionId);
                logger.info('Session closed successfully');
            }
        }
        
    } catch (error) {
        logger.error(`Fatal error in automation: ${error.stack}`);
        throw error;
    }
}