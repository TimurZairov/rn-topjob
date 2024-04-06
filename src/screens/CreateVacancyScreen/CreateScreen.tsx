import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useAppDispatch, useAppSelector} from '../../redux/type';
import {useNavigation} from '@react-navigation/native';
//
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES, width} from '../../theme/theme';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import GroupInput from '../../components/GrooupInput/GroupInput';
import {TextInput} from 'react-native-gesture-handler';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CheckIcon from '../../assets/icons/CheckIcon';
import {AppContext} from '../../context/context';
import {condition, mode, paymentMethod} from '../../data/workCategory';
import {checkValidation} from '../../helpers/vacancy';
import {createVacancy} from '../../redux/actions/vacanciesAction';
import {getImages} from '../../helpers/servicies';
import {Asset} from 'react-native-image-picker';
import {createService} from '../../redux/actions/servicesAction';
import {Service, Vacancy} from '../../types/type';
import {uploadImages} from '../../helpers/createItem';
import {createTask} from '../../redux/actions/taskAction';
import {CreateScreenNavigationProp} from '../../navigation/types/types';

const CreateVacancyScreen = () => {
  const navigation = useNavigation<CreateScreenNavigationProp>();
  //store
  const {user} = useAppSelector(state => state.user);

  //vacancy info saved in context store to save in DB
  const {
    createName,
    setCreateName,
    category,
    setCategory,
    createCity,
    setCreateCity,
    createAddress,
    setCreateAddress,
    createSalaryFrom,
    setCreateSalaryFrom,
    createSalaryTo,
    setCreateSalaryTo,
    isVacancy,
    isTask,
    isService,
    mapLocation,
  } = useContext(AppContext);

  const dispatch = useAppDispatch();

  //Text input not component
  const [vacancyDescription, setVacancyDescription] = useState('');
  //TODO VACANCY ADD FIELD VACANCY SKILLS
  const [vacancySkills, setVacancySkills] = useState('');
  const [remote, setRemote] = useState(false);
  const [payment, setPayment] = useState('');

  const [contract, setContract] = useState(false);
  const [images, setImages] = useState<Asset[] | null>([...Array(4)]);
  const [loading, setLoading] = useState(false);

  const [employmentType, setEmploymentType] = useState('');
  const [employmentTypeIndex, setEmploymentTypeIndex] = useState<number | null>(
    null,
  );
  const [workMode, setWorkMode] = useState('');
  const [workModeIndex, setWorkModeIndex] = useState<number | null>(null);

  //CREATE VACANCY
  const handleEmploymentType = (item: string, index: number) => {
    setEmploymentType(item);
    setEmploymentTypeIndex(index);
  };

  const handleWorkMode = (item: string, index: number) => {
    setWorkMode(item);
    setWorkModeIndex(index);
  };
  //get Location of vacancy place to render on map
  const handleWorkLocation = () => {
    navigation.navigate('Map');
  };
  //get and set to vacancy category
  const handleVacancyCategory = () => {
    navigation.navigate('Category');
  };

  //is task can be done Remote
  const handleRemote = () => {
    setRemote(prev => !prev);
  };

  //set handle payment method

  const handlePaymentMethod = (p: any, index: number) => {
    setPayment(p);
    setEmploymentTypeIndex(index);
  };

  //Publish Vacancy
  const handleVacancy = async () => {
    const vacancyData: Vacancy = {
      name: createName,
      category: category,
      address: createAddress,
      city: createCity,
      salaryFrom: createSalaryFrom,
      salaryTo: createSalaryTo,
      description: vacancyDescription,
      employmentType,
      workTime: workMode,
      userId: user?._id,
      img: user?.image,
      companyName: user?.name,
      mapLocation,
    };
    const checked = checkValidation(vacancyData);

    if (!checked) {
      return;
    }
    if (!user) {
      Toast.show({
        type: 'info',
        text1: 'Войдите или пройдите регистарцию',
      });
      return;
    }
    await dispatch(createVacancy(vacancyData));
    navigation.goBack();
    setCategory('');
  };

  //CREATE SERVICE

  const handleContract = () => {
    setContract(prev => !prev);
  };
  //images for create SERVICE get images from library
  const handleLoadImages = async () => {
    const localImages = await getImages();
    if (localImages) {
      setImages(localImages);
    }
  };

  //SAVE Service to DB

  const handleService = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    let serviceData: Service = {
      name: createName,
      category,
      salaryFrom: createSalaryFrom,
      salaryTo: createSalaryTo,
      description: vacancyDescription,
      userId: user && user?._id,
      isContract: contract,
      images: undefined,
      address: createAddress,
      userName: user?.name,
    };
    //validate on create
    const checked = checkValidation(serviceData);

    if (!checked) {
      return;
    }

    //upload images for service
    const imagesForUpload = await uploadImages(images);
    //create new service
    if (imagesForUpload !== null || imagesForUpload.length > 0) {
      serviceData.images = imagesForUpload;
    }
    await dispatch(createService(serviceData));
    navigation.goBack();
    setLoading(false);
    setCategory('');
  };

  //CREATE SERVICE

  const handleCreateTask = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    const newTask = {
      name: createName,
      category,
      description: vacancyDescription,
      address: createAddress,
      userId: user?._id,
      salaryFrom: createSalaryFrom,
      salaryTo: createSalaryTo,
      payment: payment,
      remote: remote,
      contract,
      userName: user?.name,
    };

    const checked = checkValidation(newTask);
    if (!checked) {
      setLoading(false);
      return;
    }
    await dispatch(createTask(newTask));
    navigation.goBack();
    setLoading(false);
    setCategory('');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo isVisible />
      <ScrollView style={styles.scroll}>
        <View style={{paddingBottom: 80}}>
          <ScreenTitle>
            Создание
            {isVacancy && ' вакансии'} {isService && 'услуги'}{' '}
            {isTask && 'задачи'}
          </ScreenTitle>
          {/* Main info */}
          <View style={styles.mainInfoContainer}>
            <Text style={styles.main}>Основная информация</Text>
            <GroupInput
              label={
                isVacancy
                  ? 'Название вакансии'
                  : isService
                  ? 'Название услуги'
                  : 'Название задачи'
              }
              placeholder="Введите название"
              setState={setCreateName}
            />
            <GroupInput
              label="Категория"
              placeholder="Выберите категорию"
              category
              handleVacancyCategory={handleVacancyCategory}
              vacancyCategory={category}
            />
          </View>
          {/* VACANCY INPUT OFFICE || TASK SERVICE SALARY FROM SALARY TO */}
          <View style={styles.mainInfoContainer}>
            <Text style={styles.main}>
              Место выполнения {isVacancy && ' вакансии'}{' '}
              {isService && 'услуги'} {isTask && 'задачи'}
            </Text>
            {isVacancy ? (
              <GroupInput
                label="Вакансия в городе"
                placeholder="Введите название"
                setState={setCreateCity}
              />
            ) : (
              <>
                <Text
                  style={[styles.blockTitle, {marginTop: !isVacancy ? 16 : 0}]}>
                  Предлагаемая сумма
                </Text>
                <Input
                  setState={setCreateSalaryFrom}
                  placeholder="от"
                  style={{marginTop: 10}}
                />
                <Input
                  setState={setCreateSalaryTo}
                  placeholder="до"
                  style={{marginTop: 5}}
                />
                <View style={styles.agreement}>
                  <TouchableOpacity
                    onPress={handleContract}
                    style={styles.checkAgreement}>
                    {contract && (
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: COLORS.green,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <CheckIcon />
                      </View>
                    )}
                  </TouchableOpacity>
                  <Text>Договорная</Text>
                </View>
              </>
            )}
            <GroupInput
              label="Адрес офиса (не обязательно)"
              placeholder="Укажите адресс"
              mapBtn
              handleWorkLocation={handleWorkLocation}
              setState={setCreateAddress}
            />
          </View>
          {/* DESCRIPTION */}
          <Text style={styles.desc}>Описание</Text>
          <View style={styles.textArea}>
            <TextInput
              onChangeText={setVacancyDescription}
              style={styles.input}
              maxLength={120}
              multiline={true}
            />
          </View>
          {/* VACANCY SALARY  */}
          {isVacancy && (
            <View style={styles.mainInfoContainer}>
              <Text style={styles.blockTitle}>Предлагаемая зарплата</Text>
              <Input
                setState={setCreateSalaryFrom}
                placeholder="от"
                style={{marginTop: 10}}
              />
              <Input
                setState={setCreateSalaryTo}
                placeholder="до"
                style={{marginTop: 5}}
              />
              {/* SKILLS */}
              <Text style={[styles.blockTitle, {marginTop: 10}]}>
                Ключевые навыки
              </Text>
              <View
                style={[
                  styles.textArea,
                  {height: 150, backgroundColor: COLORS.white},
                ]}>
                <TextInput
                  style={styles.input}
                  maxLength={120}
                  multiline={true}
                  placeholder={Platform.OS === 'ios' ? 'Введите навыки' : ''}
                  onChangeText={setVacancySkills}
                />
              </View>
              <Text style={styles.condition}>
                Укажите главные качества или навыки владения программами,
                которыми долже обладать кандидат
              </Text>
              {/* COMPANY DESCRIPTION */}
              <Text style={[styles.blockTitle, {marginTop: 10}]}>
                Кратоке описание компании
              </Text>
              <View
                style={[
                  styles.textArea,
                  {height: 150, backgroundColor: COLORS.white},
                ]}>
                <TextInput
                  style={styles.input}
                  maxLength={120}
                  multiline={true}
                  placeholder={Platform.OS === 'ios' ? 'Введите описание' : ''}
                />
              </View>
              <Text style={styles.condition}>
                Используйте только при публикации анонимных вакансий
              </Text>
            </View>
          )}

          {/* employmentType */}
          {isVacancy && (
            <View style={styles.mainInfoContainer}>
              <Text style={[styles.main, {marginBottom: 20}]}>
                Тип занятости
              </Text>
              {condition.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleEmploymentType(item, index)}
                    key={index}
                    style={styles.checkBoxContainer}>
                    <View style={styles.ratio}>
                      {employmentTypeIndex === index ? (
                        <View style={styles.checked} />
                      ) : null}
                    </View>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
          {/* Work mode */}
          {isVacancy && (
            <View style={styles.mainInfoContainer}>
              <Text style={[styles.main, {marginBottom: 20}]}>
                Режим работы
              </Text>
              {mode.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleWorkMode(item, index)}
                    key={index}
                    style={styles.checkBoxContainer}>
                    <View style={styles.checkBox}>
                      {workModeIndex === index ? (
                        <View style={styles.active}>
                          <CheckIcon />
                        </View>
                      ) : null}
                    </View>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

          {/* SERVICE */}
          {isService && (
            <View style={styles.mainInfoContainer}>
              <Text style={styles.main}>Фотографии</Text>
              <Button
                onPress={handleLoadImages}
                style={{
                  width: width / 2,
                  backgroundColor: COLORS.lightBlue,
                  marginTop: 16,
                }}>
                Прикрепить фото
              </Button>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}>
                {images?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.5}
                      style={{
                        width: 70,
                        height: 70,
                        backgroundColor: COLORS.greyMedium,
                        borderRadius: 10,
                        borderColor: COLORS.darkGrey,
                        borderWidth: 1,
                        borderStyle: 'dashed',
                        overflow: 'hidden',
                      }}>
                      {item && item.uri ? (
                        <Image
                          source={{uri: item.uri}}
                          style={styles.images}
                          resizeMode="cover"
                        />
                      ) : null}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          {/* for TASK */}
          {isTask && (
            <>
              <View style={styles.mainInfoContainer}>
                <Text style={styles.main}>Завершить задание до</Text>
                <View style={{marginTop: 16}}>
                  <GroupInput
                    label="Дата начала"
                    placeholder="от"
                    setState={setCreateCity}
                  />
                  <GroupInput
                    label="Дата окончания"
                    placeholder="до"
                    setState={setCreateCity}
                  />
                </View>
              </View>
              <View style={styles.remoteContainer}>
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={handleRemote}>
                  {remote && (
                    <View style={styles.active}>
                      <CheckIcon />
                    </View>
                  )}
                </TouchableOpacity>
                <Text>Работать можно удаленно</Text>
              </View>
              {/* PAYMENT METHOD */}
              <View style={styles.mainInfoContainer}>
                <Text style={styles.main}>Способ оплаты</Text>
                <View style={{marginTop: 10}}>
                  {paymentMethod.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => handlePaymentMethod(item, index)}
                        key={index}
                        style={styles.checkBoxContainer}>
                        <View style={styles.ratio}>
                          {employmentTypeIndex === index ? (
                            <View style={styles.checked} />
                          ) : null}
                        </View>
                        <Text>{item}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </>
          )}
          {/* SUBMIT HANDLER */}
          <Button
            onPress={
              isVacancy
                ? handleVacancy
                : isService
                ? handleService
                : handleCreateTask
            }
            style={{width: width / 2, alignSelf: 'center', marginTop: 16}}>
            {loading ? (
              <>
                <ActivityIndicator size={16} color={COLORS.white} />
              </>
            ) : isVacancy ? (
              'Создать вакансию'
            ) : isService ? (
              'Создать услугу'
            ) : (
              'Создать задачу'
            )}
            {/* Создать {isVacancy && 'вакансию'} {isTask && 'задачу'}{' '}
            {isService && 'услугу'} */}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateVacancyScreen;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
  },
  scroll: {
    paddingHorizontal: 12,
  },
  mainInfoContainer: {
    padding: 16,
    backgroundColor: COLORS.grey,
    marginTop: 26,
    borderRadius: 6,
  },
  main: {
    fontSize: SIZES.slg,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    height: 300,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  agreement: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkAgreement: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 4,
    marginRight: 10,
    overflow: 'hidden',
  },
  desc: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
    marginTop: 16,
  },
  input: {
    height: Platform.OS === 'ios' ? '100%' : null,
  },
  blockTitle: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  condition: {
    color: COLORS.darkGrey,
    fontSize: SIZES.s,
    fontFamily: FONTS.light,
    marginTop: 6,
  },
  ratio: {
    width: 18,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginRight: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checked: {
    borderWidth: 5,
    width: 10,
    aspectRatio: 1,
    borderRadius: 100,
    borderColor: COLORS.green,
  },
  checkBox: {
    width: 18,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginRight: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  active: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  remoteContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
});
