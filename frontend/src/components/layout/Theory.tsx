import React, { useState } from 'react';
import HamburgerMenu from '../navigation/HamburgerMenu';
import '../../styles/theory.css';

const Theory: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const chapters = [
    { id: 1, title: 'Основы нотной грамоты', duration: '30 мин', completed: true },
    { id: 2, title: 'Ритм и длительности нот', duration: '45 мин', completed: true },
    { id: 3, title: 'Тональности и гаммы', duration: '60 мин', completed: false },
    { id: 4, title: 'Аккорды и их построение', duration: '50 мин', completed: false },
    { id: 5, title: 'Техника игры на гитаре', duration: '75 мин', completed: false },
    { id: 6, title: 'Импровизация', duration: '90 мин', completed: false },
    { id: 7, title: 'Чтение табулатур', duration: '40 мин', completed: false },
  ];

  const progress = Math.round((chapters.filter(ch => ch.completed).length / chapters.length) * 100);

  const handleChapterClick = (chapterId: number) => {
    setSelectedChapter(chapterId);
  };

  return (
    <div className="theory-container">
      <HamburgerMenu />
      
      <div className="theory-content">
        <div className="chapters-section">
          <h1 className="theory-title">ТЕОРИЯ</h1>
          
          <div className="chapters-list">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className={`chapter-item ${selectedChapter === chapter.id ? 'active' : ''} ${chapter.completed ? 'completed' : ''}`}
                onClick={() => handleChapterClick(chapter.id)}
              >
                <div className="chapter-number">
                  {chapter.id}
                </div>
                <div className="chapter-info">
                  <div className="chapter-title">{chapter.title}</div>
                  <div className="chapter-duration">{chapter.duration}</div>
                </div>
                {chapter.completed && (
                  <div className="completion-check">✓</div>
                )}
              </div>
            ))}
          </div>

          <div className="progress-section">
            <div className="progress-header">
              <span>ПРОГРЕСС ОБУЧЕНИЯ</span>
              <span className="progress-percentage">{progress}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-stats">
              пройдено: {chapters.filter(ch => ch.completed).length} из {chapters.length} глав
            </div>
          </div>
        </div>

        <div className="theory-window">
          {selectedChapter ? (
            <div className="chapter-content">
              <h2 className="chapter-content-title">
                ГЛАВА {selectedChapter}: {chapters.find(ch => ch.id === selectedChapter)?.title}
              </h2>
              
              <div className="theory-text">
                <h3>Основные понятия</h3>
                <p>
                  В этой главе вы изучите фундаментальные принципы музыкальной теории, 
                  необходимые для понимания табулатур и нотной записи.
                </p>
                
                <h3>Содержание главы:</h3>
                <ul>
                  <li>Нотный стан и ключи</li>
                  <li>Ноты и их обозначения</li>
                  <li>Длительности нот и пауз</li>
                  <li>Такты и размеры</li>
                </ul>

                <h3>Практические упражнения</h3>
                <p>
                  После изучения теории выполните практические задания для закрепления материала.
                </p>
              </div>

              <div className="chapter-actions">
                <button className="start-chapter-btn">
                  {chapters.find(ch => ch.id === selectedChapter)?.completed ? 'Повторить' : 'Начать изучение'}
                </button>
              </div>
            </div>
          ) : (
            <div className="welcome-message">
              <h2>Добро пожаловать в раздел теории!</h2>
              <p>Выберите главу из списка слева чтобы начать изучение.</p>
              <div className="theory-features">
                <div className="feature">
                  <span>Пошаговое обучение</span>
                </div>
                <div className="feature">
                  <span>Практические примеры</span>
                </div>
                <div className="feature">
                  <span>Отслеживание прогресса</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Theory;