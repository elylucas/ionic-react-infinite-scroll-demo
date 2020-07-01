import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonAvatar, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {

  const [listItems, setListItems] = useState<{ id: number, imgUrl: string; }[]>([]);

  const appendData = (count: number) => {
    const newItems = [...listItems];
    for (let i = 0; i < count; i++) {
      newItems.push({
        id: i + listItems.length,
        imgUrl: `https://www.gravatar.com/avatar/${i + listItems.length}?d=monsterid&f=y`
      });
    }
    setListItems(newItems);
  };

  useEffect(() => {
    appendData(20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ion React Infinite Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {
            listItems.map(item => (
              <IonItem key={item.id}>
                <IonAvatar slot="start">
                  <img src={item.imgUrl} alt="" />
                </IonAvatar>
                <IonLabel>
                  <h2>{item.id}</h2>
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>
        <IonInfiniteScroll onIonInfinite={(e) => {
          setTimeout(() => {
            appendData(20);
            (e.target as HTMLIonInfiniteScrollElement).complete();
          }, 1000);
        }} threshold="100px">
          <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data...">
          </IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
